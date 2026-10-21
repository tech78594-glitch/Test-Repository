import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Google Gen AI client on server side only
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Ministry Agent API endpoint
app.post('/api/assistant', async (req, res) => {
  try {
    const { agentType, query, context } = req.body;

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    if (ai) {
      let systemInstruction = `You are the official MFM Edinburgh Ministry Assistant, representing Mountain of Fire and Miracles Ministries Edinburgh (13 Bangor Road, Leith, Edinburgh EH6 5JY, Scotland, UK).
Lead Pastor: Dr. Festus Ogunmola (Olatunde).
General Overseer Worldwide: Dr. Daniel K. Olukoya.
Core Motto: Obadiah 1:17 - "Upon Mount Zion there shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions."
Weekly Services:
- Sunday Pentecostal Hour: 10:00 AM – 10:45 AM
- Sunday Glorious Worship & Deliverance: 10:45 AM – 1:00 PM
- Tuesday Spiritual Clinic & Bible Study (Digging Deep): 6:30 PM – 8:30 PM
- Friday Deliverance & Intercessory Prayer Hour: 6:30 PM – 8:30 PM
- 1st Saturday Monthly: Power Must Change Hands (PMCH) (9:00 AM – 12:00 PM)
Location & Transit: 13 Bangor Road, Leith, Edinburgh EH6 5JY. Lothian buses 12, 16, 22, 34, 35 to Great Junction Street / Leith Walk. On-street parking free on Sundays.
Helpline: 07557 644650. Email: info@mfmedinburgh.org.

Guidelines:
- Tone: Deeply reverent, spiritually uplifting, bold in faith, warm, and rooted in biblical scripture.
- For Prayer requests: Provide 3-4 aggressive, Holy Ghost-fired warfare prayer bullets citing powerful scriptures (e.g., Psalm 91, Isaiah 54:17, Obadiah 1:17, Matthew 18:19).
- For Visitor questions: Welcome them warmly to Edinburgh/Leith, provide clear, practical guidance on service times, parking, and expectations.
- For Deliverance/Counseling: Direct them to Tuesday Spiritual Clinic and Friday Deliverance hours at 13 Bangor Rd, encouraging holiness and faith.`;

      if (agentType === 'prayer') {
        systemInstruction += ` Focus on generating targeted, aggressive warfare prayer bullets and scriptures tailored to the user's situation. Format with bold scripture references and numbered bullets starting with "In the name of Jesus...".`;
      } else if (agentType === 'visitor') {
        systemInstruction += ` Focus on welcoming first-time visitors to Edinburgh, practical directions, bus routes, parking advice, and children's Sunday school.`;
      } else if (agentType === 'deliverance') {
        systemInstruction += ` Focus on biblical deliverance doctrine, preparations for Power Must Change Hands (fasting), breaking yokes, and spiritual clinic guidance.`;
      }

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: query + (context ? `\nContext: ${JSON.stringify(context)}` : ''),
          config: {
            systemInstruction,
            temperature: 0.7,
          },
        });

        if (response.text) {
          return res.json({
            reply: response.text,
            agentType,
            source: 'gemini',
          });
        }
      } catch (geminiErr: any) {
        console.warn('Gemini temporary error, using domain knowledge fallback:', geminiErr?.message);
        // Seamlessly continue to domain fallback below
      }
    }

    // High quality domain fallback if API key is not yet set or model busy
    let fallbackReply = '';
    if (agentType === 'prayer') {
      fallbackReply = `🔥 Targeted Warfare Prayer Bullets for your situation (Anchored in Obadiah 1:17 & Psalm 91):\n\n1. In the mighty name of Jesus, let the fire of the Holy Ghost surround my life, career, and household against every satanic embargo!\n2. Every ancestral chain of limitation and delayed blessing, break by fire, in the name of Jesus! (Micah 2:13)\n3. O Lord, arise and let unmerited divine favor, open doors, and acceleration locate me in Edinburgh and Scotland! (Psalm 102:13)\n4. By the blood of the Lamb, I possess all my confiscated possessions, health, and joy, in Jesus' name!\n\nWe invite you to join our Friday Deliverance & Intercession Hour (6:30 PM) or Sunday Worship (10:45 AM) at 13 Bangor Road, Leith!`;
    } else if (agentType === 'visitor') {
      fallbackReply = `Welcome to MFM Edinburgh! We look forward to receiving you at 13 Bangor Road, Leith, Edinburgh EH6 5JY.\n\n• Sunday Gathering: 10:00 AM (Sunday School) & 10:45 AM (Glorious Worship & Deliverance Service).\n• Getting Here: Lothian Buses 12, 16, 22, 34, and 35 stop nearby along Great Junction Street.\n• Parking: Free on-street parking is available on Bangor Road and surrounding side streets on Sundays.\n• Children: We have an active, safe Sunday school for children of all ages.\n\nOur ushers will greet you with a welcome pack at the door!`;
    } else {
      fallbackReply = `Deliverance is the bread of God's children (Obadiah 1:17).\n\n• Tuesday Spiritual Clinic (6:30 PM): Personal spiritual diagnosis and Digging Deep Bible Study.\n• Friday Deliverance Hour (6:30 PM): Fervent warfare prayers breaking ancestral yokes.\n• 1st Saturday Monthly: Power Must Change Hands (PMCH, 9:00 AM – 12:00 PM).\n\nFor confidential pastoral counseling with Pastor Dr. Festus Ogunmola, call 07557 644650.`;
    }

    return res.json({
      reply: fallbackReply,
      agentType,
      source: 'domain-fallback',
    });
  } catch (err: any) {
    console.error('Error in /api/assistant:', err);
    return res.status(500).json({
      error: 'An error occurred while generating response',
      details: err?.message,
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('dist/index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`MFM Edinburgh server running on http://0.0.0.0:${port}`);
  });
}

startServer();

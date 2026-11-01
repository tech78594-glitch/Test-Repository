import { createContext, useContext } from 'react';

export type AgentType = 'prayer' | 'visitor' | 'deliverance';

/** Site-wide actions (modals, live stream) that any page can trigger. */
export interface SiteActions {
  openPlanVisit: () => void;
  openPrayerRequest: () => void;
  openAgents: (tab?: AgentType) => void;
  openLiveStream: (title?: string) => void;
  joinMinistry: (ministryName: string) => void;
  isServiceLive: boolean;
  liveStreamTitle: string;
}

export const ActionsContext = createContext<SiteActions | null>(null);

export function useSiteActions(): SiteActions {
  const ctx = useContext(ActionsContext);
  if (!ctx) throw new Error('useSiteActions must be used inside <ActionsContext.Provider>');
  return ctx;
}

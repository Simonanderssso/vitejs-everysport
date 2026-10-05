import { api } from '../../lib/fetcher';

export const SportsApi = {
  sports: () => api('/sports'), // [ {id, name} ]
  leaguesBySport: (sportId) => api(`/leagues?sport=${sportId}&season=2022`),
  teamsByLeague: (leagueId) => api(`/leagues/${leagueId}/teams`),
};

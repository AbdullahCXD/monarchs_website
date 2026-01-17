/*

 What's up developer!

 This is the Monarchs Website made by Abdullah, currently it'll show guild leaders, top players and a discord iframe

 Update the information below if there is any changes to the guild top or the leaderboard.

*/

import { GuildLeader, GuildTop } from "./types";

export const guildTop: GuildTop[] = [
    { rank: 1, name: "1DOMICAT", contributions: 73649 },
    { rank: 2, name: "AlphaxAlone", contributions: 67705 },
    { rank: 3, name: "ssgamerz_12", contributions: 63593 },
    { rank: 4, name: "Muhammed_313", contributions: 58206 },
    { rank: 5, name: "Irtee", contributions: 34478 },
    { rank: 6, name: "DNA_VIP1", contributions: 31717 },
    { rank: 7, name: "Lotobistvis", contributions: 31335 },
    { rank: 8, name: "FearOff_YT", contributions: 31321 },
    { rank: 9, name: "oSnxxy", contributions: 27673 },
    { rank: 10, name: "blank251612", contributions: 23970 }
]

export const guildLeaders: GuildLeader[] = [
    { name: "MrShadow313", role: "Guild Leader", level: 95 },
    { name: "AlphaxAlone", role: "Co-Leader", level: 92 },
    { name: "Cold_river", role: "Co-Leader", level: 90 }
];
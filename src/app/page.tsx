import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sword, Users, Trophy, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { guildLeaders, guildTop } from '@/settings';

export default function MinecraftGuildHome() {

  return (
    <div className="min-h-screen bg-zinc-950 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-20 pointer-events-none"
        style={{ backgroundImage: 'url(/minecraft-bg.png)' }}
      ></div>
      
      {/* Hero Section */}
      <div className="relative border-b border-zinc-800">
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-light text-white mb-4 tracking-tight">
            Monarchs
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Best pika-network guild!
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Badge variant="outline" className="px-6 py-2 text-base font-normal border-zinc-700 text-gray-300">
              <Users className="w-4 h-4 mr-2" strokeWidth={1.5} />
              35 Members
            </Badge>
            <Badge variant="outline" className="px-6 py-2 text-base font-normal border-zinc-700 text-gray-300">
              <Trophy className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Level 48
            </Badge>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-7 h-7 text-white" strokeWidth={1.5} />
            <h2 className="text-3xl font-light text-white">About Our Guild</h2>
          </div>
          <div className="space-y-4 text-gray-400 max-w-4xl">
            <p className="text-lg leading-relaxed font-light">
              We are a growing guild and Discord community built around PikaNetwork BedWars, bringing together players and creators from different games and interests. Our goal is to create a friendly, active, and supportive space where everyone feels welcome.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Our Discord server focuses mainly on Minecraft (PikaNetwork BedWars), but we also have active members who play Valorant and Roblox. Beyond gaming, our server is a large and diverse community made up of artists, readers, students, business-minded individuals, coders, and fans of manhua, manhwa, manga, and anime. 
            </p>
          </div>
        </div>

        {/* Guild Leaders */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-7 h-7 text-white" strokeWidth={1.5} />
            <h2 className="text-3xl font-light text-white">Guild Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guildLeaders.map((leader, index) => (
              <Card key={index} className="bg-zinc-900/80 border-zinc-800 hover:border-zinc-700 transition-all backdrop-blur">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={`https://mc-heads.net/head/${leader.name}`}
                      alt={leader.name}
                      className="w-24 h-24 pixelated"
                      style={{ imageRendering: 'pixelated' }}
                    />
                  </div>
                  <CardTitle className="text-white text-xl font-normal">{leader.name}</CardTitle>
                  <CardDescription className="text-gray-400 font-light">
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="font-normal border-zinc-700 text-gray-300">
                    Level {leader.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Contributors */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-7 h-7 text-white" strokeWidth={1.5} />
            <h2 className="text-3xl font-light text-white">Top 10 Guild Contributors</h2>
          </div>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800 bg-zinc-900/50">
                      <th className="text-left p-4 text-gray-400 font-normal">Rank</th>
                      <th className="text-left p-4 text-gray-400 font-normal">Player</th>
                      <th className="text-right p-4 text-gray-400 font-normal">Total Contributions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guildTop.map((contributor) => (
                      <tr 
                        key={contributor.rank}
                        className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition-colors"
                      >
                        <td className="p-4">
                          <Badge variant="outline" className="font-normal border-zinc-700 text-gray-300">
                            #{contributor.rank}
                          </Badge>
                        </td>
                        <td className="p-4 text-white font-normal flex space-x-2 items-center">
                          <img 
                            src={`https://mc-heads.net/avatar/${contributor.name}`}
                            alt={contributor.name}
                            className="w-5 h-5 pixelated"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <span>{contributor.name}</span>
                        </td>
                        <td className="p-4 text-right text-gray-300 font-normal">
                          {contributor.contributions.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
            <h2 className="text-3xl font-light text-white">Guild Requirements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-normal text-white mb-4">Minimum Requirements</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Player Level 45+</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">0.8 W/L ratio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Discord membership required</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Active</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-normal text-white mb-4">Guild Expectations</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Respectful and mature behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Team-oriented mindset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Active contribution to guild goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-300 mt-1">—</span>
                  <span className="font-light">Support fellow guild members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 space-y-20">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-7 h-7 text-white" strokeWidth={1.5} />
          <h2 className="text-3xl font-light text-white">Join Our Discord</h2>
        </div>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <iframe 
              src="https://discord.com/widget?id=1287305332145651793&theme=dark" 
              width="100%" 
              height="500" 
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-lg"
            ></iframe>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800">
        <div className="text-center py-12 text-gray-400 font-light">
          <p>Join us on our journey to greatness. Apply now to become a Monarch Member!</p>
        </div>
      </div>
    </div>
  );
}
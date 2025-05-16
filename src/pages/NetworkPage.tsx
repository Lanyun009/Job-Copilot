
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, UserPlus, User, Link } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const NetworkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("past");
  
  const pastConnections = [
    { id: 1, name: 'Sarah Chen', role: 'Senior PM at Google', company: 'Google', lastConnected: '2 weeks ago' },
    { id: 2, name: 'Michael Johnson', role: 'Product Lead at Amazon', company: 'Amazon', lastConnected: '1 month ago' },
    { id: 3, name: 'Priya Patel', role: 'PM at Facebook', company: 'Facebook', lastConnected: '3 months ago' },
  ];

  const pmConnections = [
    { id: 1, name: 'Jordan Lee', role: 'Senior PM at Microsoft', company: 'Microsoft', expertise: 'B2B Products' },
    { id: 2, name: 'Emma Rodriguez', role: 'PM at Spotify', company: 'Spotify', expertise: 'Consumer Apps' },
    { id: 3, name: 'Dev Sharma', role: 'Product Director at Airbnb', company: 'Airbnb', expertise: 'Marketplace' },
  ];

  const potentialConnections = [
    { id: 1, name: 'Alex Wong', role: 'PM at Netflix', company: 'Netflix', reasonToConnect: 'Similar career path, expertise in recommendation systems' },
    { id: 2, name: 'Taylor Smith', role: 'Senior PM at Shopify', company: 'Shopify', reasonToConnect: 'Expert in e-commerce platforms' },
    { id: 3, name: 'Jamie Garcia', role: 'PM at LinkedIn', company: 'LinkedIn', reasonToConnect: 'Connections in target companies' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Network Analysis</h2>
          <p className="text-gray-500 mt-1">Leverage your connections for referrals and insights</p>
        </div>
        
        <div className="flex gap-3">
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Import Connections
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Network Analysis</CardTitle>
          <CardDescription>Analyze and manage your professional network</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="past" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="past">
                <Users className="mr-2 h-4 w-4" />
                Past Connections
              </TabsTrigger>
              <TabsTrigger value="pm">
                <User className="mr-2 h-4 w-4" />
                PM Connections
              </TabsTrigger>
              <TabsTrigger value="potential">
                <UserPlus className="mr-2 h-4 w-4" />
                Who to Connect
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="past" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Past Connections</h3>
                <Button variant="outline" size="sm">
                  <Link className="mr-2 h-4 w-4" />
                  Reconnect
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Last Connected</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pastConnections.map((connection) => (
                    <TableRow key={connection.id}>
                      <TableCell className="font-medium">{connection.name}</TableCell>
                      <TableCell>{connection.role}</TableCell>
                      <TableCell>{connection.company}</TableCell>
                      <TableCell>{connection.lastConnected}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Message</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="pm" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Product Manager Connections</h3>
                <Button variant="outline" size="sm">
                  <User className="mr-2 h-4 w-4" />
                  Filter by Company
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Expertise</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pmConnections.map((connection) => (
                    <TableRow key={connection.id}>
                      <TableCell className="font-medium">{connection.name}</TableCell>
                      <TableCell>{connection.role}</TableCell>
                      <TableCell>{connection.company}</TableCell>
                      <TableCell>{connection.expertise}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">Request Intro</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="potential" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Recommended Connections</h3>
                <Button variant="outline" size="sm">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Find More
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Why Connect</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {potentialConnections.map((connection) => (
                    <TableRow key={connection.id}>
                      <TableCell className="font-medium">{connection.name}</TableCell>
                      <TableCell>{connection.role}</TableCell>
                      <TableCell>{connection.company}</TableCell>
                      <TableCell className="max-w-xs truncate">{connection.reasonToConnect}</TableCell>
                      <TableCell>
                        <Button variant="default" size="sm">
                          <UserPlus className="mr-2 h-3 w-3" />
                          Connect
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkPage;

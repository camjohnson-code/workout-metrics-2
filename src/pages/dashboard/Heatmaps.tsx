import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';
const Heatmaps = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>Heatmaps</h1>
            <p className='text-muted-foreground'>Interactive maps showing your activity patterns</p>
          </div>
          <Select disabled={isLoading} defaultValue='all'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Activity type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='all'>All Activities</SelectItem>
              <SelectItem value='running'>Running</SelectItem>
              <SelectItem value='cycling'>Cycling</SelectItem>
              <SelectItem value='hiking'>Hiking</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue='global' className='space-y-4'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='global'>Global View</TabsTrigger>
            <TabsTrigger value='local'>Local Area</TabsTrigger>
            <TabsTrigger value='routes'>Popular Routes</TabsTrigger>
          </TabsList>

          <TabsContent value='global' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Activity Heatmap</CardTitle>
                <CardDescription>All your activities visualized on a map</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className='h-[500px] w-full' />
                ) : (
                  <div className='h-[500px] flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'>
                    <div className='text-center'>
                      <p className='text-muted-foreground text-lg'>
                        Interactive heatmap will be displayed here
                      </p>
                      <p className='text-sm text-muted-foreground mt-2'>
                        Showing activity density across all locations
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='local' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Local Area Heatmap</CardTitle>
                <CardDescription>Focused view of your most active areas</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className='h-[500px] w-full' />
                ) : (
                  <div className='h-[500px] flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300'>
                    <div className='text-center'>
                      <p className='text-muted-foreground text-lg'>
                        Local area heatmap will be displayed here
                      </p>
                      <p className='text-sm text-muted-foreground mt-2'>
                        Detailed view of your neighborhood activities
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='routes' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle>Popular Routes</CardTitle>
                  <CardDescription>Your most frequently traveled paths</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className='h-[300px] w-full' />
                  ) : (
                    <div className='h-[300px] flex items-center justify-center bg-gray-50 rounded-lg'>
                      <p className='text-muted-foreground'>
                        Popular routes map will be displayed here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Route Statistics</CardTitle>
                  <CardDescription>Performance data for your top routes</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  {isLoading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <div
                          key={index}
                          className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'
                        >
                          <div className='space-y-2'>
                            <Skeleton className='h-4 w-24' />
                            <Skeleton className='h-3 w-20' />
                          </div>
                          <div className='text-right space-y-2'>
                            <Skeleton className='h-3 w-16' />
                            <Skeleton className='h-3 w-20' />
                          </div>
                        </div>
                      ))
                    : [
                        { name: 'Morning Loop', count: 24, avgTime: '32:15', bestTime: '28:45' },
                        { name: 'Park Circuit', count: 18, avgTime: '45:30', bestTime: '41:22' },
                        { name: 'Hill Climb', count: 12, avgTime: '1:05:15', bestTime: '58:30' },
                        { name: 'River Trail', count: 15, avgTime: '52:45', bestTime: '47:18' },
                      ].map((route, index) => (
                        <div
                          key={index}
                          className='flex justify-between items-center p-3 bg-gray-50 rounded-lg'
                        >
                          <div>
                            <div className='font-medium'>{route.name}</div>
                            <div className='text-sm text-muted-foreground'>
                              {route.count} activities
                            </div>
                          </div>
                          <div className='text-right text-sm'>
                            <div>Avg: {route.avgTime}</div>
                            <div className='text-green-600'>Best: {route.bestTime}</div>
                          </div>
                        </div>
                      ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Heatmaps;

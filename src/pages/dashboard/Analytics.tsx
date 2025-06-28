import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const Analytics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Analytics</h1>
          <p className='text-muted-foreground'>Deep insights into your performance trends</p>
        </div>

        <Tabs defaultValue='performance' className='space-y-4'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='performance'>Performance</TabsTrigger>
            <TabsTrigger value='trends'>Trends</TabsTrigger>
            <TabsTrigger value='goals'>Goals</TabsTrigger>
            <TabsTrigger value='insights'>Insights</TabsTrigger>
          </TabsList>

          <TabsContent value='performance' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle>Speed Analysis</CardTitle>
                  <CardDescription>Average speed trends over time</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className='h-[300px] w-full' />
                  ) : (
                    <div className='h-[300px] flex items-center justify-center bg-gray-50 rounded-lg'>
                      <p className='text-muted-foreground'>Speed chart will be displayed here</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Heart Rate Zones</CardTitle>
                  <CardDescription>Time spent in different HR zones</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className='h-[300px] w-full' />
                  ) : (
                    <div className='h-[300px] flex items-center justify-center bg-gray-50 rounded-lg'>
                      <p className='text-muted-foreground'>
                        Heart rate zone chart will be displayed here
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value='trends' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Activity Trends</CardTitle>
                <CardDescription>Your activity patterns over the past year</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className='h-[400px] w-full' />
                ) : (
                  <div className='h-[400px] flex items-center justify-center bg-gray-50 rounded-lg'>
                    <p className='text-muted-foreground'>
                      Trend analysis charts will be displayed here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='goals' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Goal Progress</CardTitle>
                <CardDescription>Track your progress towards fitness goals</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className='h-[400px] w-full' />
                ) : (
                  <div className='h-[400px] flex items-center justify-center bg-gray-50 rounded-lg'>
                    <p className='text-muted-foreground'>
                      Goal tracking visualizations will be displayed here
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='insights' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Insights</CardTitle>
                <CardDescription>Personalized recommendations based on your data</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className='space-y-4'>
                    <Skeleton className='h-20 w-full' />
                    <Skeleton className='h-20 w-full' />
                    <Skeleton className='h-20 w-full' />
                  </div>
                ) : (
                  <div className='space-y-4'>
                    <div className='p-4 bg-blue-50 border border-blue-200 rounded-lg'>
                      <h4 className='font-semibold text-blue-900'>Performance Insight</h4>
                      <p className='text-blue-800'>
                        Your average pace has improved by 12% over the last 3 months. Consider
                        increasing your weekly mileage gradually.
                      </p>
                    </div>
                    <div className='p-4 bg-green-50 border border-green-200 rounded-lg'>
                      <h4 className='font-semibold text-green-900'>Recovery Recommendation</h4>
                      <p className='text-green-800'>
                        You've been consistent with your training. Schedule a rest day this week to
                        optimize recovery.
                      </p>
                    </div>
                    <div className='p-4 bg-purple-50 border border-purple-200 rounded-lg'>
                      <h4 className='font-semibold text-purple-900'>Goal Achievement</h4>
                      <p className='text-purple-800'>
                        You're on track to exceed your monthly distance goal by 15%. Consider
                        setting a more challenging target next month.
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

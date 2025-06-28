import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { useState, useEffect } from 'react';

const Settings = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Settings</h1>
          <p className='text-muted-foreground'>Manage your account and application preferences</p>
        </div>

        <Tabs defaultValue='profile' className='space-y-4'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='profile'>Profile</TabsTrigger>
            <TabsTrigger value='preferences'>Preferences</TabsTrigger>
            <TabsTrigger value='privacy'>Privacy</TabsTrigger>
            <TabsTrigger value='account'>Account</TabsTrigger>
          </TabsList>

          <TabsContent value='profile' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='firstName'>First Name</Label>
                    {isLoading ? (
                      <Skeleton className='h-10 w-full' />
                    ) : (
                      <Input id='firstName' placeholder='John' />
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Last Name</Label>
                    {isLoading ? (
                      <Skeleton className='h-10 w-full' />
                    ) : (
                      <Input id='lastName' placeholder='Doe' />
                    )}
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  {isLoading ? (
                    <Skeleton className='h-10 w-full' />
                  ) : (
                    <Input id='email' type='email' placeholder='john@example.com' />
                  )}
                </div>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='weight'>Weight (lbs)</Label>
                    {isLoading ? (
                      <Skeleton className='h-10 w-full' />
                    ) : (
                      <Input id='weight' type='number' placeholder='150' />
                    )}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='age'>Age</Label>
                    {isLoading ? (
                      <Skeleton className='h-10 w-full' />
                    ) : (
                      <Input id='age' type='number' placeholder='25' />
                    )}
                  </div>
                </div>

                <Button
                  disabled={isLoading}
                  className={isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='preferences' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Application Preferences</CardTitle>
                <CardDescription>Customize your app experience</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Dark Mode</Label>
                    <p className='text-sm text-muted-foreground'>Toggle dark mode theme</p>
                  </div>
                  {isLoading ? <Skeleton className='h-6 w-11' /> : <Switch />}
                </div>

                <Separator />

                <div className='space-y-3'>
                  <Label>Units</Label>
                  {isLoading ? (
                    <div className='grid grid-cols-2 gap-4'>
                      <Skeleton className='h-4 w-32' />
                      <Skeleton className='h-4 w-24' />
                    </div>
                  ) : (
                    <RadioGroup defaultValue='imperial' className='grid grid-cols-2 gap-4'>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='imperial' id='imperial' />
                        <Label htmlFor='imperial'>Imperial (miles, lbs)</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='metric' id='metric' />
                        <Label htmlFor='metric'>Metric (km, kg)</Label>
                      </div>
                    </RadioGroup>
                  )}
                </div>
                <Button
                  disabled={isLoading}
                  className={isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
                >
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='privacy' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Data Export</CardTitle>
                <CardDescription>Download a copy of all your data</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <Button
                    disabled={isLoading}
                    className={isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
                    variant='outline'
                  >
                    Export Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='account' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
                <CardDescription>Manage your account settings</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='space-y-4'>
                  <h4 className='font-medium'>Connected Accounts</h4>
                  {isLoading ? (
                    <Skeleton className='h-16 w-full' />
                  ) : (
                    <div className='flex items-center justify-between p-3 border rounded-lg'>
                      <div className='flex items-center space-x-3'>
                        <div className='w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center'>
                          <span className='text-white text-sm font-bold'>S</span>
                        </div>
                        <div>
                          <p className='font-medium'>Strava</p>
                          <p className='text-sm text-muted-foreground'>Connected</p>
                        </div>
                      </div>
                      <Button variant='outline' size='sm'>
                        Disconnect
                      </Button>
                    </div>
                  )}
                </div>

                <Separator />

                <div className='space-y-4'>
                  <h4 className='font-medium text-red-600'>Danger Zone</h4>
                  {isLoading ? (
                    <Skeleton className='h-24 w-full' />
                  ) : (
                    <div className='p-4 border border-red-200 rounded-lg bg-red-50'>
                      <h5 className='font-medium text-red-800'>Delete Account</h5>
                      <p className='text-sm text-red-700 mt-1'>
                        Permanently delete your account and all associated data. This action cannot
                        be undone.
                      </p>
                      <Button variant='destructive' className='mt-3'>
                        Delete Account
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

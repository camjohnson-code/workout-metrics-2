import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
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
                    <Input id='firstName' placeholder='John' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Input id='lastName' placeholder='Doe' />
                  </div>
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input id='email' type='email' placeholder='john@example.com' />
                </div>
                <div className='grid gap-4 md:grid-cols-2'>
                  <div className='space-y-2'>
                    <Label htmlFor='weight'>Weight (lbs)</Label>
                    <Input id='weight' type='number' placeholder='150' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='age'>Age</Label>
                    <Input id='age' type='number' placeholder='25' />
                  </div>
                </div>
                <Button>Save Changes</Button>
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
                  <Switch />
                </div>

                <Separator />

                <div className='space-y-3'>
                  <Label>Units</Label>
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
                </div>

                <Separator />

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Email Notifications</Label>
                    <p className='text-sm text-muted-foreground'>Receive weekly progress reports</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Push Notifications</Label>
                    <p className='text-sm text-muted-foreground'>Get reminders and achievements</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Button>Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='privacy' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your data and privacy</CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Profile Visibility</Label>
                    <p className='text-sm text-muted-foreground'>
                      Make your profile visible to other users
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Activity Sharing</Label>
                    <p className='text-sm text-muted-foreground'>
                      Allow others to see your activities
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className='flex items-center justify-between'>
                  <div className='space-y-0.5'>
                    <Label>Data Analytics</Label>
                    <p className='text-sm text-muted-foreground'>
                      Help improve the app with anonymous usage data
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <Separator />

                <div className='space-y-4'>
                  <h4 className='font-medium'>Data Export</h4>
                  <p className='text-sm text-muted-foreground'>Download a copy of all your data</p>
                  <Button variant='outline'>Export Data</Button>
                </div>

                <Button>Save Privacy Settings</Button>
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
                  <h4 className='font-medium'>Change Password</h4>
                  <div className='space-y-2'>
                    <Label htmlFor='currentPassword'>Current Password</Label>
                    <Input id='currentPassword' type='password' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='newPassword'>New Password</Label>
                    <Input id='newPassword' type='password' />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='confirmPassword'>Confirm New Password</Label>
                    <Input id='confirmPassword' type='password' />
                  </div>
                  <Button>Update Password</Button>
                </div>

                <Separator />

                <div className='space-y-4'>
                  <h4 className='font-medium'>Connected Accounts</h4>
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
                </div>

                <Separator />

                <div className='space-y-4'>
                  <h4 className='font-medium text-red-600'>Danger Zone</h4>
                  <div className='p-4 border border-red-200 rounded-lg bg-red-50'>
                    <h5 className='font-medium text-red-800'>Delete Account</h5>
                    <p className='text-sm text-red-700 mt-1'>
                      Permanently delete your account and all associated data. This action cannot be
                      undone.
                    </p>
                    <Button variant='destructive' className='mt-3'>
                      Delete Account
                    </Button>
                  </div>
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

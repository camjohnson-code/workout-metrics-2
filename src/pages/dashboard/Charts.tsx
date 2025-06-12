import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Charts = () => {
  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div className='flex justify-between items-center'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>Charts</h1>
            <p className='text-muted-foreground'>
              Visualize your fitness data with interactive charts
            </p>
          </div>
          <Select defaultValue='last30'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select time range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='last7'>Last 7 days</SelectItem>
              <SelectItem value='last30'>Last 30 days</SelectItem>
              <SelectItem value='last90'>Last 90 days</SelectItem>
              <SelectItem value='year'>This year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='grid gap-6'>
          <Card>
            <CardHeader>
              <CardTitle>Distance Over Time</CardTitle>
              <CardDescription>Track your distance progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[300px] flex items-center justify-center bg-gray-50 rounded-lg'>
                <p className='text-muted-foreground'>
                  Distance over time chart will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>

          <div className='grid gap-4 md:grid-cols-2'>
            <Card>
              <CardHeader>
                <CardTitle>Activity Distribution</CardTitle>
                <CardDescription>Breakdown by activity type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='h-[250px] flex items-center justify-center bg-gray-50 rounded-lg'>
                  <p className='text-muted-foreground'>Activity pie chart will be displayed here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Volume</CardTitle>
                <CardDescription>Training load by week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='h-[250px] flex items-center justify-center bg-gray-50 rounded-lg'>
                  <p className='text-muted-foreground'>
                    Weekly volume bar chart will be displayed here
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Elevation Profile</CardTitle>
              <CardDescription>Elevation gain across activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='h-[300px] flex items-center justify-center bg-gray-50 rounded-lg'>
                <p className='text-muted-foreground'>
                  Elevation profile chart will be displayed here
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Charts;

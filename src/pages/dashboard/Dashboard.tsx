import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Clock, MapPin, Zap } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Activities',
      value: '142',
      description: 'This year',
      icon: Activity,
      trend: '+12 from last month',
    },
    {
      title: 'Total Distance',
      value: '1,247 mi',
      description: 'This year',
      icon: MapPin,
      trend: '+89 mi from last month',
    },
    {
      title: 'Active Time',
      value: '187h 32m',
      description: 'This year',
      icon: Clock,
      trend: '+14h from last month',
    },
    {
      title: 'Avg Speed',
      value: '12.4 mph',
      description: 'Last 30 days',
      icon: Zap,
      trend: '+0.8 mph improvement',
    },
  ];

  return (
    <DashboardLayout>
      <div className='space-y-6'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900'>Dashboard</h1>
          <p className='text-muted-foreground'>Your fitness journey at a glance</p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <Card key={index} className='hover:shadow-lg transition-shadow'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>{stat.title}</CardTitle>
                <stat.icon className='h-4 w-4 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{stat.value}</div>
                <p className='text-xs text-muted-foreground'>{stat.description}</p>
                <p className='text-xs text-green-600 mt-1'>{stat.trend}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your workouts from the past week</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {[
                { activity: 'Morning Run', distance: '5.2 mi', time: '42:15', date: 'Today' },
                {
                  activity: 'Evening Bike Ride',
                  distance: '12.8 mi',
                  time: '1:18:30',
                  date: 'Yesterday',
                },
                { activity: 'Trail Run', distance: '8.1 mi', time: '1:05:22', date: '2 days ago' },
                {
                  activity: 'Road Cycling',
                  distance: '25.3 mi',
                  time: '1:45:12',
                  date: '3 days ago',
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors'
                >
                  <div>
                    <div className='font-medium'>{activity.activity}</div>
                    <div className='text-sm text-muted-foreground'>{activity.date}</div>
                  </div>
                  <div className='text-right'>
                    <div className='font-medium'>{activity.distance}</div>
                    <div className='text-sm text-muted-foreground'>{activity.time}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className='col-span-3'>
            <CardHeader>
              <CardTitle>Monthly Goals</CardTitle>
              <CardDescription>Track your progress this month</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {[
                { goal: 'Distance', current: 89, target: 100, unit: 'mi' },
                { goal: 'Activities', current: 12, target: 15, unit: '' },
                { goal: 'Active Time', current: 18, target: 25, unit: 'h' },
              ].map((goal, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex justify-between text-sm'>
                    <span>{goal.goal}</span>
                    <span>
                      {goal.current}
                      {goal.unit} / {goal.target}
                      {goal.unit}
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300'
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

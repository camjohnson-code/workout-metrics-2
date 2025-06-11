import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Map, Target, Zap, TrendingUp, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description:
        'Deep dive into your performance metrics with comprehensive charts and trend analysis that reveal patterns in your training.',
    },
    {
      icon: Map,
      title: 'Interactive Heatmaps',
      description:
        "Visualize everywhere you've been with beautiful, interactive heatmaps that show your activity patterns across different locations.",
    },
    {
      icon: TrendingUp,
      title: 'Performance Insights',
      description:
        'Discover actionable insights about your fitness progress with AI-powered recommendations to optimize your training.',
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description:
        'Set and monitor your fitness goals with intelligent tracking that adapts to your progress and suggests improvements.',
    },
    {
      icon: Zap,
      title: 'Real-time Sync',
      description:
        'Seamlessly connects with your Strava account for instant data synchronization and up-to-date analytics.',
    },
    {
      icon: Trophy,
      title: 'Personal Records',
      description:
        'Automatically track and celebrate your personal bests across different metrics like fastest pace, longest distance, and elevation gain.',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-4 mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>
            Everything you need to
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {' '}
              excel
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Transform your raw Strava data into meaningful insights that help you become a better
            athlete
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50'
            >
              <CardContent className='p-8'>
                <div className='space-y-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center'>
                    <feature.icon className='h-6 w-6 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900'>{feature.title}</h3>
                  <p className='text-muted-foreground leading-relaxed'>{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

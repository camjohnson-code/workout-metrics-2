import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, Map, TrendingUp } from 'lucide-react';
import appPreview from '@/assets/images/app-preview.webp';

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center'>
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center space-y-12'>
          {/* Header Content */}
          <div className='space-y-8 max-w-4xl mx-auto'>
            <div className='space-y-4'>
              <h1 className='text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight'>
                Unlock Your Strava Data
              </h1>
              <p className='text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto'>
                Transform your Strava activities into powerful insights with advanced analytics,
                beautiful charts, and interactive heatmaps. See your fitness journey like never
                before.
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button
                size='lg'
                className='cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Get Started Free
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='cursor-pointer px-8 py-6 text-lg rounded-xl border-2 hover:bg-muted/50 transition-all duration-300'
              >
                See Demo
              </Button>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-8 pt-4'>
              <div className='flex items-center space-x-2'>
                <BarChart3 className='h-5 w-5 text-blue-600' />
                <span className='text-sm font-medium text-muted-foreground'>
                  Advanced Analytics
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <Map className='h-5 w-5 text-purple-600' />
                <span className='text-sm font-medium text-muted-foreground'>
                  Interactive Heatmaps
                </span>
              </div>
              <div className='flex items-center space-x-2'>
                <TrendingUp className='h-5 w-5 text-blue-600' />
                <span className='text-sm font-medium text-muted-foreground'>
                  Performance Insights
                </span>
              </div>
            </div>
          </div>

          {/* Full Width App Preview */}
          <div className='relative max-w-6xl mx-auto'>
            <div className='relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden'>
              <img src={appPreview} alt='App Preview' className='w-full rounded-lg shadow-lg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

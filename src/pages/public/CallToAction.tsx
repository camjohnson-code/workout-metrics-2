import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className='py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden'>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center space-y-8 max-w-4xl mx-auto'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <Sparkles className='h-6 w-6 text-teal-400' />
            <span className='text-teal-400 font-semibold'>Ready to level up?</span>
          </div>

          <h2 className='text-4xl lg:text-6xl font-bold text-white leading-tight'>
            Start analyzing your
            <span className='text-teal-400'> fitness data today</span>
          </h2>

          <p className='text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto'>
            Join thousands of athletes who are already using WorkoutMetrics to unlock insights from
            their Strava data and achieve their fitness goals faster.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
            <Button
              size='lg'
              className='bg-teal-400 text-blue-900 hover:bg-teal-300 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold cursor-pointer'
              onClick={() => navigate('/login')}
            >
              Get Started Free
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='border-2 border-teal-400 text-teal-400 bg-transparent hover:bg-teal-400 hover:text-blue-900 px-8 py-6 text-lg rounded-xl transition-all duration-300 font-semibold cursor-pointer'
            >
              View Demo
            </Button>
          </div>

          <div className='flex items-center justify-center space-x-8 pt-8 text-blue-100'>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-400 rounded-full'></div>
              <span className='text-sm'>Free to start</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-400 rounded-full'></div>
              <span className='text-sm'>No credit card required</span>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-400 rounded-full'></div>
              <span className='text-sm'>Setup in 2 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { Heart } from 'lucide-react';
import stravaLogo from '@/assets/images/api_logo_pwrdBy_strava_stack_white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-12 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              workoutmetrics.fit
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Unlock the full potential of your Strava data with advanced analytics and beautiful
              visualizations.
            </p>
            <img src={stravaLogo} alt='Powered by Strava logo' className='w-16 h-auto' />
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-gray-300'>Product</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Features
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Analytics
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Heatmaps
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-gray-300'>Company</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className='space-y-4'>
            <h4 className='font-semibold text-gray-300'>Legal</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <p className='text-sm text-gray-400'>
            © {currentYear} WorkoutMetrics. All rights reserved.
          </p>
          <div className='flex items-center space-x-1 text-sm text-gray-400'>
            <span>Made with</span>
            <Heart className='h-4 w-4 text-red-400 fill-current' />
            <span>for athletes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { logoutAccount } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface FooterProps {
  user: { name: string; email?: string } | null; // Ensure that user can be null and email is optional
  type?: 'desktop' | 'mobile';
}

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  // Add checks for user and user.name
  const userName = user?.name || ''; // Default to an empty string if user is null
  const initial = user?.name ? user.name[0] : ''; // Get the first character of the name or an empty string
  const userEmail = user?.email || ''; // Safely access email or use an empty string
  
  const router = useRouter();

  const handleLogOut = async () => {
     const loggedOut = await logoutAccount();

     if(loggedOut) router.push('/sign-in')
  }
  return (
    <footer className="footer">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text_xl font-bold text-gray-700">
          {initial} {/* Display initial or nothing if name is not available */}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
        <h1 className="text-14 truncate  text-gray-700 font-semibold">
          {userName} {/* Display name or nothing if user is null */}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {userEmail} {/* Safely access and display email or nothing if user is null */}
        </p>
      </div>
      
      <div className="footer_image" onClick={handleLogOut}>
      <Image src="/icons/logout.svg" width={24} height={24} alt="logout icon"/>
      </div>
    </footer>
  );
};

export default Footer;



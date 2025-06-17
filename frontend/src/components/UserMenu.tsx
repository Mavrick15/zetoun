import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, User, UserCircle } from "lucide-react";
import useAuth from '@/hooks/useAuth';

const UserMenu = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  // If the user is not authenticated, display login and signup buttons
  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          className="text-sm"
          onClick={() => navigate('/login')}
        >
          Se connecter
        </Button>
        <Button 
          variant="default" 
          className="text-sm"
          onClick={() => navigate('/signup')}
        >
          S'inscrire
        </Button>
      </div>
    );
  }

  // Get user initials for the avatar fallback
  const getInitials = () => {
    if (user?.name) {
      // If user has a name, get the first two initials
      return user.name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    // Otherwise, use the first two characters of the email or 'UT' for 'Unknown User'
    return user?.email?.substring(0, 2).toUpperCase() || 'UT';
  };

  // Handle user logout
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to home page after logout
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Button that triggers the dropdown menu, acting as the user's avatar */}
        <Button variant="ghost" className="relative h-9 w-9 rounded-full">
          <Avatar className="h-9 w-9 border border-gray-200">
            <AvatarFallback className="bg-blue-100 text-blue-800">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      {/* Content of the dropdown menu */}
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Displays the user's email */}
        <DropdownMenuItem className="flex items-center gap-2">
          <UserCircle className="h-4 w-4" />
          <span className="truncate">{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {/* Logout button */}
        <DropdownMenuItem 
          className="flex cursor-pointer items-center gap-2 text-red-600 focus:text-red-700"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;

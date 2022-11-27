import React from 'react';
import { redirect } from 'react-router-dom';

export const AuthPage = () => {
  redirect('/links');

  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  );
};

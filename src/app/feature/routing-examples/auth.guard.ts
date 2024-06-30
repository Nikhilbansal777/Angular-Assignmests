import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // const service = inject(ProductService).getProductsList()
  let token = localStorage.getItem("token");
  console.log(route.routeConfig?.path);
  console.log("hi");
  
  if (route.routeConfig?.path === 'login') {
    // If token exists and user tries to access the login page, redirect to home
    if (token) {
      router.navigate(['/routing/home']);
      return false;
    } else {
      return true;
    }
  } else {
    // For other routes, if token exists, allow access, otherwise redirect to login
    if (token) {
      return true;
    } else {
      router.navigate(['/routing/login']);
      return false;
    }
  }
};

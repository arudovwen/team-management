import React from 'react';
import { auth$ } from '@Sterling/shared';
import { AuthenticatedUserPayload } from '@app/types/authenticated-user';

export const usePermission = () => {
   const [authPayload, setAuthPayload] = React.useState<AuthenticatedUserPayload | null>(null);
   const [authLoaded, setAuthLoaded] = React.useState<boolean>(false);
   React.useEffect(() => {
      let sub: any;
      if (auth$) {
         sub = auth$.subscribe((value: AuthenticatedUserPayload) => {
            setAuthLoaded(true);
            setAuthPayload(value);
         });
      }

      return () => {
         if (sub) {
            sub.unsubscribe();
         }
      };
   }, [auth$]);

   const userPermissions = authPayload?.user?.tenant_admin
      ? Object.values(authPayload?.SYSTEM_PERMISSIONS)
      : authPayload?.user?.user_permissions;

   const checkPermission = (permissions: string[]) =>
      permissions?.some((role) => userPermissions?.includes(role));

   return {
      ...authPayload,
      checkPermission,
      authLoaded,
      isSuperAdmin: authPayload?.user?.tenant_admin,
   };
};

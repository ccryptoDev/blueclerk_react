import { Button } from '@material-ui/core';
import React from 'react';
import SocialLogin from 'react-social-login';

function BCBCSocialButton(props: any) {
  const { children, triggerlogin } = props;
  return (
    <Button
      color={'primary'}
      fullWidth
      onClick={triggerlogin}
      size={'large'}
      type={'button'}
      variant={'contained'}
      {...props}>
      {children}
    </Button>
  );
}

export default SocialLogin(BCBCSocialButton);

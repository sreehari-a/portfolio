import { useLocation, useHistory } from 'react-router-dom'
import { useAuth } from './useAuth';

function RequireAuth({ children }: {children: any}) {
  const { authed } = useAuth();
  const location = useLocation();
  const history = useHistory();

  if(authed) {
      return children;
  }
  else {
      history.push('/')
  }
}
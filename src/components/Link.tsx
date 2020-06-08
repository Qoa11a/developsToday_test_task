import { withRouter } from 'next/router';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  const { href } = props;
  let { activeClassName } = props;

  let className = child.props.className || null;
  if (router.pathname === href && activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  activeClassName = null;

  return (
    <Link href="#" {...props}>
      {React.cloneElement(child, { className })}
    </Link>
  );
};

export default withRouter(ActiveLink);

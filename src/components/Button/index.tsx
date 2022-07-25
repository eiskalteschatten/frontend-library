import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef, RefObject, useCallback } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { PaletteColorClasses } from '~/interfaces/colors';

import Spinner from '../Spinner';

import styles from './styles.module.scss';

interface InitialProps {
  iconButton?: boolean;
  large?: boolean;
  primary?: boolean;
  paletteColor?: PaletteColorClasses;
  outlined?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>;
  showLoader?: boolean;
  contentClassName?: string;
}

interface LinkProps extends InitialProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  externalLink?: boolean;
}

interface ButtonProps extends InitialProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
  externalLink?: undefined;
}

type Props = LinkProps | ButtonProps;

const Button: React.FC<Props> = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    href,
    externalLink,
    iconButton,
    large,
    primary,
    paletteColor,
    outlined,
    icon,
    iconRight,
    showLoader,
    contentClassName,
    className,
    ...leftoverProps
  } = props;

  const classes = clsx(styles.button, className, {
    [styles.iconButton]: iconButton,
    [styles.large]: large,
    [styles.primary]: primary,
    [styles[String(paletteColor)]]: paletteColor,
    [styles.outlined]: outlined,
  });

  const Content= useCallback<React.FC>(() => (
    <div className={clsx(styles.content, contentClassName)}>
      {showLoader && (
        <div className={styles.loader}>
          <Spinner />
        </div>
      )}

      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}

      {children}

      {iconRight && (
        <span className={styles.iconRight}>
          {iconRight}
        </span>
      )}
    </div>
  ), [icon, children, iconRight, showLoader]);

  const LinkComponent = useCallback<React.FC>(() => {
    if (!href) {
      return null;
    }

    return (
      <>
        {externalLink ? (
          <a
            href={href}
            className={classes}
            ref={ref as RefObject<HTMLAnchorElement>}
            {...leftoverProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>}
          >
            <Content />
          </a>
        ) : (
          <Link to={href}>
            <a
              className={classes}
              ref={ref as RefObject<HTMLAnchorElement>}
              {...leftoverProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>}
            >
              <Content />
            </a>
          </Link>
        )}
      </>
    );
  }, [externalLink, classes, icon, children, iconRight, showLoader]);

  return (
    <>
      {href ? (
        <LinkComponent />
      ) : (
        <button
          {...leftoverProps as ButtonHTMLAttributes<HTMLButtonElement>}
          className={classes}
          disabled={showLoader || (props as ButtonHTMLAttributes<HTMLButtonElement>).disabled}
          ref={ref as RefObject<HTMLButtonElement>}
        >
          <Content />
        </button>
      )}
    </>
  );
});

export default Button;

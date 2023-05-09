import React from 'react';
import DropdownMenu from './DropdownMenu';
import LazyTippy from '../../common/utils/LazyTippy';
import './Dropdown.scss';
import { DropdownItemProps } from './DropdownItem';

export interface DropdownProps {
  hideOnClickMenu?: boolean;
  elementAction: React.ReactNode;
  children: React.ReactElement<DropdownItemProps, any> | React.ReactElement<DropdownItemProps, any>[];
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ children, elementAction }) => {
  const [isVisible, setVisible] = React.useState(false);

  return (
    <LazyTippy
      className="dropdown"
      content={<DropdownMenu toggleMenu={() => setVisible(false)}>{children}</DropdownMenu>}
      interactive
      visible={isVisible}
      placement="bottom"
      onClickOutside={() => setVisible(false)}
    >
      <div className="dropdown-elm" onClick={() => setVisible(true)}>
        {elementAction}
      </div>
    </LazyTippy>
  );
};

export default Dropdown;

type Props = {
  icon: string;
  title: string;
  selected?: boolean;
  link?: string;
  onSelect?: (item: string, link: string) => void;
};

const NavItem = ({ icon, title, selected, onSelect, link = "" }: Props) => {
  return (
    <div
      className={`nav-item-container ${selected && "selected-item "} `}
      onClick={() => {
        if (!onSelect) {
          return;
        }
        onSelect(title, link);
      }}
    >
      <img src={icon} />
      <p>{title}</p>
    </div>
  );
};

export default NavItem;

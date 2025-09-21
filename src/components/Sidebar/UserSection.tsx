import UserImage from "../../assets/UserImage";

const UserSection = ({ name }: { name: string }) => {
  return (
    <section
      aria-label="User Info"
      className="mb-8 flex items-center space-x-3"
      data-testid="sidebar-user"
    >
      <UserImage />
      <div className="flex flex-col">
        <span className="font-medium" data-testid="user-name">
          {name}
        </span>
      </div>
    </section>
  );
};

export default UserSection;

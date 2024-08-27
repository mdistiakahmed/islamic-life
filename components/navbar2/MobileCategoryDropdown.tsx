import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { countries } from "@/data/countryMetadata";
import { religions } from "@/data/religionMetadata";

const MobileCategoryDropdown = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const genderOptions = [
    <DropdownItem
      key={`girl`}
      textValue={`girl`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/young-girl-icon.svg`}
        />
      }
      onClick={() => handleItemClick(`/gender/girl`)}
    >
      Girl name
    </DropdownItem>,
    <DropdownItem
      key={`boy`}
      textValue={`boy`}
      startContent={
        <Image
          alt={"girl"}
          height={6}
          width={6}
          className="w-6 h-6"
          src={`/young-boy-icon.svg`}
        />
      }
      onClick={() => handleItemClick(`/gender/boy`)}
    >
      Boy name
    </DropdownItem>,
  ];

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "py-1 px-1 border border-default-200",
      }}
    >
      <DropdownTrigger>
        <div>
          <MenuIcon sx={{ color: "white" }} />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        <DropdownSection>{genderOptions}</DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default MobileCategoryDropdown;

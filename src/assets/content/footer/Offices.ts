import peterS from "../../avatars/peterS.png";
import peterN from "../../avatars/peterN.png";
import robert from "../../avatars/robert.png";

export const offices = [
  {
    country: `Poland`,
    headquarter: true,
    data: {
      name: `Peter Schumacher`,
      title: `Founder & CEO`,
      address: `Dmowskiego 3/69, 50-203`,
      location: `Wrocław, Poland`,
    },
    avatar: `${peterS}`,
  },
  {
    country: `San Francisco`,
    headquarter: false,
    data: {
      name: "Robert Hogeboom",
      title: `Managing Director`,
      address: `535 Mission St 14th Floor`,
      location: `San Francisco, CA 94105`,
    },
    avatar: `${robert}`,
  },
  {
    country: `London`,
    headquarter: false,
    data: {
      name: "Peter Nixey",
      title: `London Rep`,
      address: `145 City Road`,
      location: `London, United Kingdom`,
    },
    avatar: `${peterN}`,
  },
];

employeeService = (function() {
  const findByName = function(searchKey) {
    const deferred = $.Deferred();
    const results = employees.filter(function(element) {
      const fullName = element.firstName + " " + element.lastName + " " + element.id;
      return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
    });
    deferred.resolve(results);
    return deferred.promise();
  };
  const findById = function(id) {
    const deferred = $.Deferred();
    const l = employees.length;
    let employee = null;
    for (let i = 0; i < l; i++) {
      if (employees[i].id === id) {
        employee = employees[i];
        break;
      }
    }
    deferred.resolve(employee);
    return deferred.promise();
  };

  const employees = [
    {
      id: 1,
      firstName: "Sein",
      lastName: "Tun",
      managerId: 0,
      managerName: "",
      reports: 4,
      title: "President and CEO",
      department: "Corporate",
      mobilePhone: "617-000-0001",
      officePhone: "781-000-0001",
      email: "contact@seintun.dev",
      city: "San Francisco, CA",
      pic: "james_king.jpg",
      twitterId: "@sein_tun",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 2,
      firstName: "Super",
      lastName: "Gopher",
      managerId: 1,
      managerName: "Sein Tun",
      reports: 2,
      title: "VP of Marketing",
      department: "Marketing",
      mobilePhone: "617-000-0002",
      officePhone: "781-000-0002",
      email: "sgopher@fakemail.com",
      city: "Boston, MA",
      pic: "julie_taylor.jpg",
      twitterId: "@supergopher",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 3,
      firstName: "Eugene",
      lastName: "Lee",
      managerId: 1,
      managerName: "Sein Tun",
      reports: 0,
      title: "CFO",
      department: "Accounting",
      mobilePhone: "617-000-0003",
      officePhone: "781-000-0003",
      email: "elee@fakemail.com",
      city: "Boston, MA",
      pic: "eugene_lee.jpg",
      twitterId: "@fakeelee",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 4,
      firstName: "John",
      lastName: "Williams",
      managerId: 1,
      managerName: "Sein Tun",
      reports: 3,
      title: "VP of Engineering",
      department: "Engineering",
      mobilePhone: "617-000-0004",
      officePhone: "781-000-0004",
      email: "jwilliams@fakemail.com",
      city: "Boston, MA",
      pic: "john_williams.jpg",
      twitterId: "@fakejwilliams",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 5,
      firstName: "Ray",
      lastName: "Moore",
      managerId: 1,
      managerName: "Sein Tun",
      reports: 2,
      title: "VP of Sales",
      department: "Sales",
      mobilePhone: "617-000-0005",
      officePhone: "781-000-0005",
      email: "rmoore@fakemail.com",
      city: "Boston, MA",
      pic: "ray_moore.jpg",
      twitterId: "@fakermoore",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 6,
      firstName: "Paul",
      lastName: "Jones",
      managerId: 4,
      managerName: "John Williams",
      reports: 0,
      title: "QA Manager",
      department: "Engineering",
      mobilePhone: "617-000-0006",
      officePhone: "781-000-0006",
      email: "pjones@fakemail.com",
      city: "Boston, MA",
      pic: "paul_jones.jpg",
      twitterId: "@fakepjones",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 7,
      firstName: "Paula",
      lastName: "Gates",
      managerId: 4,
      managerName: "John Williams",
      reports: 0,
      title: "Software Architect",
      department: "Engineering",
      mobilePhone: "617-000-0007",
      officePhone: "781-000-0007",
      email: "pgates@fakemail.com",
      city: "Boston, MA",
      pic: "paula_gates.jpg",
      twitterId: "@fakepgates",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 8,
      firstName: "Lisa",
      lastName: "Wong",
      managerId: 2,
      managerName: "Julie Taylor",
      reports: 0,
      title: "Marketing Manager",
      department: "Marketing",
      mobilePhone: "617-000-0008",
      officePhone: "781-000-0008",
      email: "lwong@fakemail.com",
      city: "Boston, MA",
      pic: "lisa_wong.jpg",
      twitterId: "@fakelwong",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 9,
      firstName: "Gary",
      lastName: "Donovan",
      managerId: 2,
      managerName: "Julie Taylor",
      reports: 0,
      title: "Marketing Manager",
      department: "Marketing",
      mobilePhone: "617-000-0009",
      officePhone: "781-000-0009",
      email: "gdonovan@fakemail.com",
      city: "Boston, MA",
      pic: "gary_donovan.jpg",
      twitterId: "@fakegdonovan",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 10,
      firstName: "Kathleen",
      lastName: "Byrne",
      managerId: 5,
      managerName: "Ray Moore",
      reports: 0,
      title: "Sales Representative",
      department: "Sales",
      mobilePhone: "617-000-0010",
      officePhone: "781-000-0010",
      email: "kbyrne@fakemail.com",
      city: "Boston, MA",
      pic: "kathleen_byrne.jpg",
      twitterId: "@fakekbyrne",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 11,
      firstName: "Amy",
      lastName: "Jones",
      managerId: 5,
      managerName: "Ray Moore",
      reports: 0,
      title: "Sales Representative",
      department: "Sales",
      mobilePhone: "617-000-0011",
      officePhone: "781-000-0011",
      email: "ajones@fakemail.com",
      city: "Boston, MA",
      pic: "amy_jones.jpg",
      twitterId: "@fakeajones",
      blog: "http://www.linkedin.com/in/seintun"
    },
    {
      id: 12,
      firstName: "Steven",
      lastName: "Wells",
      managerId: 4,
      managerName: "John Williams",
      reports: 0,
      title: "Software Architect",
      department: "Engineering",
      mobilePhone: "617-000-0012",
      officePhone: "781-000-0012",
      email: "swells@fakemail.com",
      city: "Boston, MA",
      pic: "steven_wells.jpg",
      twitterId: "@fakeswells",
      blog: "http://www.linkedin.com/in/seintun"
    }
  ];

  return {
    findByName: findByName,
    findById: findById
  };
})();

export function getAllSectionIds(){
  const sections = getAllSectionData();

  return sections.map((section) => {
    return {
      params: {
        id: section.id
      }
    }
  });
}

export function getSectionData(id){
  const sections = getAllSectionData();

  for(var i=0; i<sections.length; i++){
    if(sections[i].id == id){
      return sections[i]
    }
  }

}

export function getAllSectionData(){
  const sections = [
    {
      id: "bridge",
      title: "Bridge"
    },
    {
      id: "engine-room",
      title: "Engine Room",
    },
    {
      id: "crew",
      title: "Crew",
    },
    {
      id: "shields",
      title: "Shields",
    },
    {
      id: "medical-bay",
      title: "Medical Bay",
    },
  ];

  return sections;
}
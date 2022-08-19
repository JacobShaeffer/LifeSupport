# LifeSupport

start dev server with 'npx next dev'


MongoDB structure scheme:

Main -> Sections -> [
	{ _id: "bridge", title: "Bridge", children: []},
	{ _id: "engine-room", title: "Engine Room", children: []},
	{ _id: "medical-bay", title: "Medical Bay", children: []},
	{ _id: "crew", title: "Crew", children: ["cats", "humans"]},
	{ _id: "shields", title: "Shields", children: []},
]
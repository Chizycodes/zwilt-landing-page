import SubCatIcon from './assets/sub-cat.svg';
import ProfileIcon from './assets/profile.svg';
import SkillIcon from './assets/skill-icon.svg';
import Shopify from './assets/shopify.svg';
import Magento from './assets/magento.svg';
import DataScience from './assets/data-science.svg';
import WebFlow from './assets/webflow.svg';
import DotNet from './assets/dotnet.svg';
import Photoshop from './assets/photoshop.svg';
import Figma from './assets/figma.svg';
import Illus from './assets/illus.svg';
import Unreal from './assets/unreal.svg';
import Cinema from './assets/cinema4d.svg';

export const roleList = [
	'Python Developer',
	'Data Scientist',
	'Shopify Developer',
	'Shopify Developer',
	'Front End Developer',
	'Python Developer',
	'MERN Stack Developer',
	'Shopify Developer',
	'Full Stack Developer',
	'Full Stack Developer',
	'Python Developer',
	'Explore More',
];

export const Skills = [
	{
		leftSection: {
			title: 'Find Dev and IT professionals to scale your business.',
			items: [
				{
					icon: SkillIcon,
					text: '989 Skills',
				},
				{
					icon: SubCatIcon,
					text: '45 Sub-Categories',
				},
				{
					icon: ProfileIcon,
					text: '1011 Profiles',
				},
			],
		},
		rightSection: {
			id: 0,
			title: 'IT & Development',
			skills: [
				{
					icon: Shopify,
					text: 'Shopify Developer',
				},
				{
					icon: Magento,
					text: 'Magento Developer',
				},
				{
					icon: DataScience,
					text: 'Data Scientist',
				},
				{
					icon: WebFlow,
					text: 'Webflow Developer',
				},
				{
					icon: DotNet,
					text: 'Dot Net Developer',
				},
			],
		},
	},

	{
		leftSection: {
			title: 'Explore Creative individuals with a keen eye for detail.',
			items: [
				{
					icon: SkillIcon,
					text: '989 Skills',
				},
				{
					icon: SubCatIcon,
					text: '45 Sub-Categories',
				},
				{
					icon: ProfileIcon,
					text: '1011 Profiles',
				},
			],
		},
		rightSection: {
			id: 1,
			title: 'Design & Creative',
			skills: [
				{
					icon: Figma,
					text: 'UX Designer',
				},
				{
					icon: Photoshop,
					text: 'Graphics Designer',
				},
				{
					icon: Illus,
					text: 'Illustration Artist',
				},
				{
					icon: Unreal,
					text: 'Unreal Engine',
				},
				{
					icon: Cinema,
					text: 'Cinema 4D',
				},
			],
		},
	},
];

export const processList = [
	{
		id: 1,
		title: 'Resume Screening',
		description:
			'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.',
	},
	{
		id: 2,
		title: 'Video Interview',
		description:
			'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.',
	},
	{
		id: 3,
		title: 'Technical Evaluation',
		description:
			'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.',
	},
	{
		id: 4,
		title: 'Application Review',
		description:
			'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.',
	},
	{
		id: 5,
		title: "Let's get to work",
		description:
			'Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.',
	},
];

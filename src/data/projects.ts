import chip from '../../public/projects/chip.png';
import codeGremlin from '../../public/projects/codeGremlin.png';

import pixel from '../../public/projects/pixel.png';
import { Project } from '@/types';

export const projects: Project[] = [
    {
        _id: '01',
        title: 'CodeGremlin',
        url: 'https://vue-blog-efd41.web.app/',
        img: codeGremlin,
    },
    {
        _id: '02',
        title: 'Pixel Invoice',
        url: 'https://invoice-app-95c00.web.app/',
        img: pixel,
    },
    {
        _id: '03',
        title: 'Chip 8 Emulator',
        url: 'https://github.com/Alex-Grimes/go-chip-8',
        img: chip,
    },
];
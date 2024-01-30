import * as FaIcons from 'react-icons/fa';
import { IconType } from 'react-icons';


interface RenderIconProps {
        iconName: string;
}

interface IconMapper {
        [key: string]: IconType;
      }

const iconMapper: IconMapper = {
        beer: FaIcons.FaBeer,
        coffee: FaIcons.FaCoffee,
      };

const RenderIcon: React.FC<RenderIconProps> = ({ iconName }) => {
        const Icon = iconMapper[iconName] || FaIcons.FaQuestion;
      
        return (<Icon/>);
      };

export default RenderIcon;
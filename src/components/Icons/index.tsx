import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faCalendarDay, faChevronLeft, faComment, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'styled-components'

export const IconGithub = () => <FontAwesomeIcon icon={faGithub} size='xl' color={useTheme().colorBaseLabel} />
export const IconBuilding = () => <FontAwesomeIcon icon={faBuilding} size='xl' color={useTheme().colorBaseLabel} />
export const IconUserGroup = () => <FontAwesomeIcon icon={faUserGroup} size='xl' color={useTheme().colorBaseLabel} />
export const IconCalendarDay = () => <FontAwesomeIcon icon={faCalendarDay} size='xl' color={useTheme().colorBaseLabel} />
export const IconChevronLeft = () => <FontAwesomeIcon icon={faChevronLeft} size='xl' color={useTheme().colorBaseLabel} />
export const IconComment = () => <FontAwesomeIcon icon={faComment} size='xl' color={useTheme().colorBaseLabel} />
export const IconUpRight = () => <FontAwesomeIcon icon={faUpRightFromSquare} size='xl' color={useTheme().colorBaseLabel} />

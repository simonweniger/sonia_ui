import { VersionMenu } from '../version-menu'

export interface HeaderVersionMenuProps {
  containerRef?: React.RefObject<HTMLElement | null>
}

export const HeaderVersionMenu = ({ containerRef }: HeaderVersionMenuProps) => (
  <VersionMenu
    items={[
      { title: 'v3', value: '3.0.x-beta', url: '#' },
      { title: 'v2', value: '2.11.x', url: 'https://v2.sonia-ui.dev' },
      { title: 'v1', value: '1.5.x', url: 'https://v1.sonia-ui.dev' },
    ]}
    containerRef={containerRef}
  />
)

'use client'

import { FiHome, FiUsers } from 'react-icons/fi'

import {
  AppShell,
  IconButton,
  Menu,
  Page,
  Persona,
  Sidebar,
  Spacer,
} from '@sonia/ui'

const SoniaUILogo = () => (
  <svg width="120" height="24">
    <text y="18" fontSize="16" fontWeight="bold">
      Sonia UI
    </text>
  </svg>
)

export const AppShellSidebar = () => {
  return (
    <Sidebar.Provider>
      <AppShell
        height="400px"
        sidebar={
          <Sidebar.Root width="240px">
            <Sidebar.Header ps="4">
              <SoniaUILogo width="80px" />
              <Spacer />
              <Menu.Root>
                <Menu.Trigger asChild>
                  <IconButton variant="ghost" size="sm" aria-label="User menu">
                    <Persona.Root presence="online">
                      <Persona.Avatar size="xs" src="/showcase-avatar.jpg" />
                    </Persona.Root>
                  </IconButton>
                </Menu.Trigger>
                <Menu.Content>
                  <Menu.Item value="signout">Sign out</Menu.Item>
                </Menu.Content>
              </Menu.Root>
            </Sidebar.Header>
            <Sidebar.Body>
              <Sidebar.Group>
                <Sidebar.GroupContent>
                  <Sidebar.NavItem>
                    <Sidebar.NavButton>
                      <FiHome /> Home
                    </Sidebar.NavButton>
                  </Sidebar.NavItem>
                  <Sidebar.NavItem>
                    <Sidebar.NavButton>
                      <FiUsers /> Contacts
                    </Sidebar.NavButton>
                  </Sidebar.NavItem>
                </Sidebar.GroupContent>
              </Sidebar.Group>
            </Sidebar.Body>
          </Sidebar.Root>
        }
      >
        <Page.Root>
          <Page.Header title="Users" />
          <Page.Body p="0"></Page.Body>
        </Page.Root>
      </AppShell>
    </Sidebar.Provider>
  )
}

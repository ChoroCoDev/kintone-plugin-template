import React from 'react'
import { createRoot } from 'react-dom/client'
import { rootId, ConfigPage } from '@src'

const PLUGIN_ID = kintone.$PLUGIN_ID
const config: PluginConfig = kintone.plugin.app.getConfig(PLUGIN_ID)

const container = document.getElementById(rootId) as HTMLElement
const root = createRoot(container)
root.render(<ConfigPage {...config} />)

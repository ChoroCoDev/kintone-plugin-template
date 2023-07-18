import React from 'react'
import { useForm } from 'react-hook-form'

export const ConfigPage = (props: PluginConfig) => {
  const {} = useForm<PluginConfig>({
    defaultValues: props,
  })
  return <div>ConfigPage</div>
}

export default ConfigPage

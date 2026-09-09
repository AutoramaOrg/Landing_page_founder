export const DEVELOPMENT_PROJECT = 'wqzcimuetknagejrkuqh'
export const PRODUCTION_PROJECT = 'nmenoqjgjtrpvowguvlg'

export function resolveCheckoutConfig({ development = false, projectRef, enabled } = {}) {
  const project = projectRef || (development ? DEVELOPMENT_PROJECT : PRODUCTION_PROJECT)
  if (![DEVELOPMENT_PROJECT, PRODUCTION_PROJECT].includes(project)) {
    throw new Error('Projeto de checkout não autorizado')
  }
  if (!development && project !== PRODUCTION_PROJECT) {
    throw new Error('Build público não pode usar o checkout de Desenvolvimento')
  }
  return {
    baseUrl: `https://${project}.supabase.co/functions/v1`,
    enabled: enabled === undefined ? development : enabled === 'true',
  }
}

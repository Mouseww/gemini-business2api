import apiClient from './client'
import type { Settings } from '@/types/api'

export const settingsApi = {
  // 获取设置
  get: () =>
    apiClient.get<never, Settings>('/admin/settings'),

  // 更新设置
  update: (settings: Settings) =>
    apiClient.put('/admin/settings', settings),

  // 立即刷新 SOCKS5 代理
  refreshProxy: () =>
    apiClient.post('/admin/settings/refresh-proxy'),
}

import { ref } from "vue"
import store from "@/store"
import { defineStore } from "pinia"
import { getToken, removeToken, setToken } from "@/utils"
import { resetRouter } from "@/router"
import { type ILoginRequestData, loginApi, getUserInfoApi } from "@/api/login"

export const useUserStore = defineStore("user", () => {
    const token = ref<string>(getToken() || "")
    const roles = ref<string[]>([])
    const username = ref<string>("")

    /** 设置角色数组 */
    const setRoles = (value: string[]) => {
        roles.value = value
    }
    /** 登录 */
    const login = (loginData: ILoginRequestData) => {
        return new Promise((resolve, reject) => {
            loginApi({
                username: loginData.username,
                password: loginData.password,
                code: loginData.code
            }).then((res) => {
                setToken(res.data.token)
                token.value = res.data.token
                resolve(true)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    /** 获取用户详情 */
    const getInfo = () => {
        return new Promise((resolve, reject) => {
            getUserInfoApi().then((res) => {
                roles.value = res.data.roles
                username.value = res.data.username
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    /** 登出 */
    const logout = () => {
        removeToken()
        token.value = ""
        roles.value = []
        resetRouter()
    }
    /** 重置 Token */
    const resetToken = () => {
        removeToken()
        token.value = ""
        roles.value = []
    }

    return { token, roles, username, setRoles, login, getInfo, logout, resetToken }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
    return useUserStore(store)
}

import { ref } from "vue";

interface User {
    email: string;
    password: string;
}
export const loginUser = ref<User>({
    email: "",
    password: ""
})
// 校验规则
interface Rules {
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        message: string;
        required: boolean;
        trigger: string;
        min?: unknown;
        max?: unknown;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: unknown;
    })[];
}
export const rules = ref<Rules>({
    email: [{ type: "email", message: "邮箱格式错误", required: true, trigger: 'blur' }],
    password: [{ message: "密码格式错误", required: true, trigger: 'blur' }, { min: 6, max: 30, message: "长度在6到12", trigger: 'blur' }]
});


/**
 * 下面是注册的
 */
// 注册的
interface RegisterUser {
    name: string;
    email: string;
    password: string;
    password2: string;
    role: string;
}
export const registerUser = ref<RegisterUser>({
    name: "", //名字
    email: "", //邮箱
    password: "", //密码
    password2: "", //确认密码
    role: "", //权限管理
});


interface RegisterRules {
    name: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
        message: string;
        required: boolean;
        trigger: string;
        min?: undefined;
        max?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
    })[];
    password2: ({
        message: string;
        required: boolean;
        trigger: string;
        min?: undefined;
        max?: undefined;
        validator?: undefined;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
        required?: undefined;
        validator?: undefined;
    } | {
        // 对方法进行解释(RegisterRules 对应的就是上面的规则)
        validator: (rule: RegisterRules, value: string, callback: any) => void;
        trigger: string;
    })[];
}
const validatePass = (rule: any, value: string, callback: any) => {
    if (value === "") {
        callback(new Error("请再次输入密码"));
    } else if (value !== registerUser.value.password) {
        callback(new Error("两次输入密码不一致!"));
    } else {
        callback();
    }
};
export const registerRules = ref<RegisterRules>({
    name: [
        { message: "用户名格式错误", required: true, trigger: "blur" },
        { min: 2, max: 30, message: "长度在2到12", trigger: "blur" },
    ],
    email: [
        {
            type: "email",
            message: "邮箱格式错误",
            required: true,
            trigger: "blur",
        },
    ],
    password: [
        { message: "密码格式错误", required: true, trigger: "blur" },
        { min: 6, max: 30, message: "长度在6到12", trigger: "blur" },
    ],
    password2: [
        { message: "密码格式错误", required: true, trigger: "blur" },
        { min: 6, max: 30, message: "长度在6到12", trigger: "blur" },
        { validator: validatePass, trigger: "blur" },
    ],
});
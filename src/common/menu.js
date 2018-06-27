import {
    isUrl
} from '../utils/utils';

const menuData = [
    // {
    //         name: 'dashboard',
    //         icon: 'dashboard',
    //         path: 'Dashboard',
    //         children: [{
    //             name: '分析页',
    //             path: 'Analysis',
    //         }, {
    //             name: '监控页',
    //             path: 'Monitor',
    //         }, {
    //             name: '工作台',
    //             path: 'Workplace',
    //         }],
    //     }, {
    //         name: '表单页',
    //         icon: 'form',
    //         path: 'Forms',
    //         children: [{
    //             name: '基础表单',
    //             path: 'BasicForm',
    //         }, {
    //             name: '分步表单',
    //             path: 'StepForm/Step1',
    //         }, {
    //             name: '高级表单',
    //             authority: 'admin',
    //             path: 'AdvancedForm',
    //         }],
    //     }, {
    //         name: '列表页',
    //         icon: 'table',
    //         path: 'List',
    //         children: [{
    //             name: '查询表格',
    //             path: 'TableList',
    //         }, {
    //             name: '标准列表',
    //             path: 'BasicList',
    //         }, {
    //             name: '卡片列表',
    //             path: 'CardList',
    //         }, {
    //             name: '搜索列表',
    //             path: 'Search',
    //             children: [{
    //                 name: '搜索列表（文章）',
    //                 path: 'Articles',
    //             }, {
    //                 name: '搜索列表（项目）',
    //                 path: 'Projects',
    //             }, {
    //                 name: '搜索列表（应用）',
    //                 path: 'Applications',
    //             }],
    //         }],
    //     }, {
    //         name: '详情页',
    //         icon: 'profile',
    //         path: 'Profile',
    //         children: [{
    //             name: '基础详情页',
    //             path: 'BasicProfile',
    //         }, {
    //             name: '高级详情页',
    //             path: 'AdvancedProfile',
    //             authority: 'admin',
    //         }],
    //     }, {
    //         name: '结果页',
    //         icon: 'check-circle-o',
    //         path: 'Result',
    //         children: [{
    //             name: '成功',
    //             path: 'Success',
    //         }, {
    //             name: '失败',
    //             path: 'Error',
    //         }],
    //     }, {
    //         name: '异常页',
    //         icon: 'warning',
    //         path: 'Exception',
    //         children: [{
    //             name: '403',
    //             path: '403',
    //         }, {
    //             name: '404',
    //             path: '404',
    //         }, {
    //             name: '500',
    //             path: '500',
    //         }, {
    //             name: '触发异常',
    //             path: 'triggerException',
    //             hideInMenu: true,
    //         }],
    //     },
    // {
    //   name: '账户',
    //   icon: 'user',
    //   path: 'User',
    //   authority: 'guest',
    //   children: [{
    //     name: '登录',
    //     path: 'Login',
    //   }, {
    //     name: '注册',
    //     path: 'Register',
    //   }, {
    //     name: '注册结果',
    //     path: 'RegisterResult',
    //   }],
    // }
    {
        name: 'demo',
        icon: 'warning',
        path: 'Demo',
    }
];

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map((item) => {
        let {
            path
        } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}
//TODO:先去掉了authority，等调试完了再加上
export const getMenuData = () => formatter(menuData);
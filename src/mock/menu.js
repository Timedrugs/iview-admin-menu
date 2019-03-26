import Mock from 'mockjs'

Mock.mock('/getMenu', {
  path: '/components',
  name: 'components',
  meta: {
    icon: 'logo-buffer',
    title: '组件'
  },
  // component: Main,
  children: [
    {
      path: 'tree_select_page',
      name: 'tree_select_page',
      meta: {
        icon: 'md-arrow-dropdown-circle',
        title: '树状下拉选择器'
      },
      component: () => import('@/view/components/tree-select/index.vue')
    },
    {
      path: 'count_to_page',
      name: 'count_to_page',
      meta: {
        icon: 'md-trending-up',
        title: '数字渐变'
      },
      component: () => import('@/view/components/count-to/count-to.vue')
    },
    {
      path: 'drag_list_page',
      name: 'drag_list_page',
      meta: {
        icon: 'ios-infinite',
        title: '拖拽列表'
      },
      component: () => import('@/view/components/drag-list/drag-list.vue')
    },
    {
      path: 'drag_drawer_page',
      name: 'drag_drawer_page',
      meta: {
        icon: 'md-list',
        title: '可拖拽抽屉'
      },
      component: () => import('@/view/components/drag-drawer')
    },
    {
      path: 'org_tree_page',
      name: 'org_tree_page',
      meta: {
        icon: 'ios-people',
        title: '组织结构树'
      },
      component: () => import('@/view/components/org-tree')
    },
    {
      path: 'tree_table_page',
      name: 'tree_table_page',
      meta: {
        icon: 'md-git-branch',
        title: '树状表格'
      },
      component: () => import('@/view/components/tree-table/index.vue')
    },
    {
      path: 'cropper_page',
      name: 'cropper_page',
      meta: {
        icon: 'md-crop',
        title: '图片裁剪'
      },
      component: () => import('@/view/components/cropper/cropper.vue')
    },
    {
      path: 'tables_page',
      name: 'tables_page',
      meta: {
        icon: 'md-grid',
        title: '多功能表格'
      },
      component: () => import('@/view/components/tables/tables.vue')
    },
    {
      path: 'split_pane_page',
      name: 'split_pane_page',
      meta: {
        icon: 'md-pause',
        title: '分割窗口'
      },
      component: () => import('@/view/components/split-pane/split-pane.vue')
    },
    {
      path: 'markdown_page',
      name: 'markdown_page',
      meta: {
        icon: 'logo-markdown',
        title: 'Markdown编辑器'
      },
      component: () => import('@/view/components/markdown/markdown.vue')
    },
    {
      path: 'editor_page',
      name: 'editor_page',
      meta: {
        icon: 'ios-create',
        title: '富文本编辑器'
      },
      component: () => import('@/view/components/editor/editor.vue')
    },
    {
      path: 'icons_page',
      name: 'icons_page',
      meta: {
        icon: '_bear',
        title: '自定义图标'
      },
      component: () => import('@/view/components/icons/icons.vue')
    }
  ]
})
export const mainList = () => {
  return [{
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    // component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'tree_select_page',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '树状下拉选择器'
        },
        component: () => import('@/view/components/tree-select/index.vue')
      },
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'drag_list_page',
        name: 'drag_list_page',
        meta: {
          icon: 'ios-infinite',
          title: '拖拽列表'
        },
        component: () => import('@/view/components/drag-list/drag-list.vue')
      },
      {
        path: 'drag_drawer_page',
        name: 'drag_drawer_page',
        meta: {
          icon: 'md-list',
          title: '可拖拽抽屉'
        },
        component: () => import('@/view/components/drag-drawer')
      },
      {
        path: 'org_tree_page',
        name: 'org_tree_page',
        meta: {
          icon: 'ios-people',
          title: '组织结构树'
        },
        component: () => import('@/view/components/org-tree')
      },
      {
        path: 'tree_table_page',
        name: 'tree_table_page',
        meta: {
          icon: 'md-git-branch',
          title: '树状表格'
        },
        component: () => import('@/view/components/tree-table/index.vue')
      },
      {
        path: 'cropper_page',
        name: 'cropper_page',
        meta: {
          icon: 'md-crop',
          title: '图片裁剪'
        },
        component: () => import('@/view/components/cropper/cropper.vue')
      },
      {
        path: 'tables_page',
        name: 'tables_page',
        meta: {
          icon: 'md-grid',
          title: '多功能表格'
        },
        component: () => import('@/view/components/tables/tables.vue')
      },
      {
        path: 'split_pane_page',
        name: 'split_pane_page',
        meta: {
          icon: 'md-pause',
          title: '分割窗口'
        },
        component: () => import('@/view/components/split-pane/split-pane.vue')
      },
      {
        path: 'markdown_page',
        name: 'markdown_page',
        meta: {
          icon: 'logo-markdown',
          title: 'Markdown编辑器'
        },
        component: () => import('@/view/components/markdown/markdown.vue')
      },
      {
        path: 'editor_page',
        name: 'editor_page',
        meta: {
          icon: 'ios-create',
          title: '富文本编辑器'
        },
        component: () => import('@/view/components/editor/editor.vue')
      },
      {
        path: 'icons_page',
        name: 'icons_page',
        meta: {
          icon: '_bear',
          title: '自定义图标'
        },
        component: () => import('@/view/components/icons/icons.vue')
      }
    ]
  }]
}

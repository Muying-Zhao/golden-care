import serviceType from "../../enum/service-type";

// 引入第三方类库
// const moment=require("../../lib/moment")


Component({
  properties: {
    form: Object
  },
  data: {
    typeList: [
      {
        id: 1,
        name: '关爱行动'
      },
      {
        id: 2,
        name: '弘扬孝善文化'
      },
      {
        id: 3,
        name: '志愿活动'
      },
      {
        id: 4,
        name: '其他'
      },
    ],
    typePickerIndex: null,
    files: [],
    formData: {
      type: null,
      title: '',
      cover_image_id: null,
      description: '',
      begin_date: '',
      end_date: '',
      // price: ''
    },
    rules: [{
        name: 'type',
        rules: {
          required: true,
          message: '请指定服务类型'
        },
      },
      {
        name: 'title',
        rules: [{
            required: true,
            message: '服务标题内容不能少于 2 个字'
          },
          {
            minlength: 2,
            message: '服务描述内容不能少于 2 个字'
          },
        ],
      },
      {
        name: 'cover_image_id',
        rules: {
          required: true,
          message: '请上传封面图'
        },
      },
      {
        name: 'description',
        rules: [{
            required: true,
            message: '服务描述不能为空'
          },
          {
            minlength: 10,
            message: '服务描述内容不能少于 10 个字'
          },
        ],
      },
      {
        name: 'begin_date',
        rules: [{
          required: true,
          message: '请指定服务有效日期开始时间'
        }, ],
      },
      {
        name: 'end_date',
        rules: [{
            required: true,
            message: '请指定服务有效日期结束时间'
          },
          // 结束日期校验规则
          {
            validator: function (rule, value, param, models) {
              // if (moment(value).isSame(models.begin_date) || moment(value).isAfter(models.begin_date)) {
              //   return null
              // }
              return '结束时间必须大于开始时间'
            }
          }
        ],

      },
    ],
    resetForm: true,
    showForm: true,
    serviceTypeEnum: serviceType,
    error:null
  },
  
  // lifetimes:{
  //   attached(){
  //     console.log('attached')
  //     // this.init()
  //   }
  // },

  // 监听页面生命周期实现校验状态切换
  pageLifetimes: {
    show: function () {
      if (this.data.resetForm) {
        this.init(this.data.form)
      }
      this.data.resetForm = true
    },
    hide: function () {
      // 页面被隐藏
      if (this.data.resetForm) {
        this.setData({
          showForm: false,
        })
      }
    },
  },

  methods: {
    submit() {
      // validate方法返回表单整体校验的结果
      this.selectComponent('#form').validate(async (valid, errors) => {
        if (!valid) {
          const errMsg = errors.map(error => error.message)
          this.setData({
            error: errMsg.join('；'),
          })
          return
        }
        this.triggerEvent('submit', {
          formData: this.data.formData
        })
      })
    },

    async init(form) {
      // console.log(form.type,'999')
      const typePickerIndex = this.data.typeList.findIndex(item => item.id === form.type);

      this.setData({
        // 展示表单
        showForm: true,
        showSwitch: typePickerIndex === 0,
        files: form.cover_image ? [form.cover_image] : [],
        typePickerIndex: typePickerIndex > -1 ? typePickerIndex : null,
        formData: {
          type: form.type,
          title: form.title,
          cover_image_id: form.cover_image ? form.cover_image.id : null,
          description: form.description,
          begin_date: form.begin_date,
          end_date: form.end_date,
          // price: form.price
        },
      })
    },

    bindTypePickerChange(event) {
      const index = event.detail.value
      this.setData({
        typePickerIndex: index,
        'formData.type': this.data.typeList[event.detail.value].id
      })
    },


    bindBeginDateChange(event) {
      this.setData({
        'formData.begin_date': event.detail.value
      })
    },

    bindEndDateChange(event) {
      this.setData({
        'formData.end_date': event.detail.value
      })
    },

    bindInputChange(event) {
      const {
        field
      } = event.currentTarget.dataset
      this.setData({
        [`formData.${field}`]: event.detail.value
      })
    },

    handleHidePage() {
      this.data.resetForm = false
    },

    handleUploadSuccess: function (event) {
      const files = event.detail.files
      this.setData({
        'formData.cover_image_id': files[0].id
      })
    }
  }
});
<template>
  <table
    align="center"
    border="0"
    cellpadding="0"
    cellspacing="'0"
    role="presentation"
    width="100%"
    style="width: 100%"
    :style="style"
  >
    <tbody>
      <tr>
        <td height="20px"></td>
      </tr>
      <tr>
        <td
          align="center"
          style="
            width: 440px;
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          "
        >
          <a :href="logoOption.href" target="_blank">
            <img
              width="180px"
              style="margin: auto; width: 180px; height: auto"
              :src="logoOption.src"
              alt=""
            />
          </a>
        </td>
      </tr>
      <tr>
        <td height="20px"></td>
      </tr>
      <tr>
        <td
          style="
            text-align: center;
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            padding: 0;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            width="100%"
            style="
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            "
          >
            <tbody>
              <tr>
                <td
                  align="center"
                  height="30px"
                  :width="item.width ? item.width : ''"
                  v-for="(item, index) in navList"
                  :key="index"
                  style="background: #026fd1"
                >
                  <a
                    :href="item.href"
                    style="
                      font-family: 'Roboto';
                      font-style: normal;
                      font-weight: 500;
                      font-size: 16px;
                      line-height: 30px;
                      color: #fff;
                      text-decoration: none;
                    "
                    target="_blank"
                  >
                    {{ item.title }}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { headerProp } from './interface'

export default defineComponent({
  name: 'Header',
  props: headerProp
})
</script>

<style lang="scss" scoped></style>

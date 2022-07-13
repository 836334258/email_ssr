<template>
  <table
    align="center"
    border="0"
    cellpadding="0"
    cellspacing="'0"
    role="presentation"
    style="
      width: 100%;
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    "
  >
    <tbody>
      <tr>
        <td
          style="
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
          "
        >
          <div style="max-width: 646px; margin: 0px auto">
            <table
              align="center"
              border="0"
              cellpadding="0"
              cellspacing="'0"
              role="presentation"
              style="
                width: 100%;
                border-collapse: collapse;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              "
            >
              <tbody>
                <tr>
                  <!-- <td
                    valign="top"
                    style="
                      font-size: 0px;
                      word-break: break-word;
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                  >
                    <p
                      style="
                        border-top: 1px solid rgba(27, 28, 30, 0.1);
                        font-size: 1px;
                        width: 100%;
                        display: block;
                        font-family: Rubik;
                        margin: 0px auto;
                      "
                    ></p>
                  </td> -->
                </tr>
                <tr>
                  <td
                    height="175"
                    align="center"
                    style="
                      font-size: 0px;
                      word-break: break-word;
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                  >
                    <div style="max-width: 720px; margin: 0px auto">
                      <table
                        border="0"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        width="648px"
                        style="
                          border-collapse: collapse;
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          margin: 0px auto;
                        "
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              width="33%"
                              v-for="(item, index) in afterIcon"
                              :key="index"
                            >
                              <template v-if="item.href">
                                <a :href="item.href" target="_blank">
                                  <img
                                    :src="item.src"
                                    :width="item.width"
                                    height="auto"
                                    alt=""
                                  />
                                </a>
                              </template>
                              <template v-else>
                                <img
                                  :src="item.src"
                                  :width="item.width"
                                  height="auto"
                                  alt=""
                                />
                              </template>
                            </td>
                          </tr>
                          <tr>
                            <td
                              v-for="(item, index) in afterIcon"
                              :key="index"
                              style="
                                font-size: 16px;
                                line-height: 1.5;
                                text-align: center;
                                font-weight: 400;
                                width: 30%;
                                color: #333333;
                                padding: 10px 22px 0 22px;
                              "
                              v-html="item.title"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                <locket-tr>
                  <locket-td>
                    <locket-line margin="0" width="133px"></locket-line>
                  </locket-td>
                </locket-tr>
                <tr>
                  <td
                    valign="top"
                    style="
                      font-size: 0px;
                      word-break: break-word;
                      border-collapse: collapse;
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                  >
                    <table
                      border="0"
                      align="center"
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
                        <!-- <td
                          width="46"
                          valign="top"
                          style="
                            width:46px;
                            font-size: 0px;
                            word-break: break-word;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background: #026ed1;
                            height: 2px;
                          "
                        ></td> -->
                      </tbody>
                    </table>
                    <table
                      border="0"
                      align="center"
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
                          <td height="67" align="center">
                            <div>
                              <table
                                border="0"
                                align="center"
                                cellpadding="0"
                                cellspacing="0"
                                role="presentation"
                                width="250px"
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
                                      v-for="(item, index) in mediaLink"
                                      :key="index"
                                    >
                                      <a :href="item.href" target="_blank">
                                        <img
                                          :src="item.src"
                                          width="24"
                                          alt=""
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td
                            valign="top"
                            style="
                              font-size: 0px;
                              word-break: break-word;
                              border-collapse: collapse;
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                            "
                          ></td>
                        </tr>
                        <locket-tr>
                          <locket-td>
                            <locket-line></locket-line>
                          </locket-td>
                        </locket-tr>
                        <tr>
                          <td height="80px"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { footerProp } from './interface'
export default defineComponent({
  props: footerProp,
  setup(prop) {}
})
</script>

<style lang="scss" scoped></style>

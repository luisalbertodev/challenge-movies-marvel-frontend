import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

.pl1{
  padding-left: .25rem;
}

.pr1{
  padding-right: .25rem;
}

.p0 {
  padding: 0px !important;
}

.m0 {
  margin: 0px !important;
}

.h-40{
  height: 40px;
}

.w-100{
  width: 100%;
}

.min-h-320 {
  min-height: 320px;
}

.max-h-520 {
  max-height: 520px;
}

.h-12-icon {
  height: 1.2em;
}

.imagePreview {
  height: 40px !important;
  width: 40px !important;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
  margin: 4px;
}

.ant-image-mask-info {
  text-align: center !important;
}

.ant-list-item-meta {
  align-items: center;
}

/* Responsive */

@media (max-width: 767px) {
  .d-none-m {
    display: none;
  }

  .w-100-mobile {
    width: 100%;
  }

  .p-fluid-mobile {
    padding: 0 32px !important;
  }

  .p-x-1-mobile {
    padding: 0 1em;
  }
}

`;

export default globalStyle;

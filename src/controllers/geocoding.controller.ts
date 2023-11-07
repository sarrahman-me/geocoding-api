import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import axios from 'axios';

@Controller('/maps/geocoding')

/**
 * GeocodingClass adalah controller yang menangani permintaan terkait geokoding.
 */
export class GeocodingController {
  /**
   * Endpoint untuk pencarian lokasi / alamat
   */

  @Get('search/:alamat')
  async searchPlace(@Param('alamat') alamat: string): Promise<any> {
    /**
     * Memeriksa apakah parameter alamat ada
     */

    if (!alamat) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          success: false,
          message: 'Data tidak lengkap',
          error: {
            fields: {
              alamat: !alamat ? 'Alamat harus diisi' : '',
            },
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      /**
       * Mengambil semua data alamat dari api geocode.maps.co
       */

      const result = await axios.get(
        `https://geocode.maps.co/search?q=${alamat}`,
      );

      const data = result.data;

      if (data.length < 1) {
        throw new HttpException('alamat tidak ditemukan', HttpStatus.NOT_FOUND);
      }

      return {
        status: HttpStatus.OK,
        success: true,
        message: 'alamat ditemukan',
        data: data,
      };
    } catch (error) {
      /**
       * Mengembalikan kesalahan tak terduga
       */

      throw new HttpException(
        error || 'Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}

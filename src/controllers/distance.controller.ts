import {
  Controller,
  Query,
  Get,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import axios from 'axios';

@Controller('/maps/distance-matrix')

/**
 * DistanceController adalah controller yang menangani perhitungan jarak antara dua alamat
 */
export class DistanceController {
  /**
   * Method [GET] untuk mengambil matrix jarak dari dua query
   */

  @Get()
  async distanceMatrix(
    @Query('origins') origins: string,
    @Query('destinations') destinations: string,
  ): Promise<any> {
    /**
     * Validasi pada query dari client
     */

    if (!origins || !destinations) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: 'data tidak lengkap',
          error: {
            fields: {
              origins: !origins ? 'Alamat asal harus diisi' : '',
              destinations: !destinations ? 'Alamat tujuan harus diisi' : '',
            },
          },
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      /**
       *  mengambil data matrix dari api distancematrix.ai
       */

      const responseApi = await axios.get(
        `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${origins}&destinations=${destinations}&key=${process.env.DISTANCE_MATRIX_API_KEY}`,
      );

      const result = responseApi.data;

      /**
       * menjabarkan hasil response yang dibutuhkan
       */

      const data = {
        destination_addresses: result?.destination_addresses,
        origin_addresses: result?.origin_addresses,
        distance: result?.rows[0].elements[0].distance,
        duration: result?.rows[0].elements[0].duration,
      };

      return data;
    } catch (error) {
      /**
       * handle error tak terduga
       */

      throw new HttpException(
        error || 'Kesalahan server',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
